import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Migration "migration";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

(with migration = Migration.run)
actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Inquiry = {
    id : Nat;
    fullName : Text;
    email : Text;
    phone : Text;
    program : Text;
    message : Text;
    timestamp : Int;
    isRead : Bool;
  };

  let inquiriesVar = Map.empty<Nat, Inquiry>();
  var nextId = 1;

  public shared ({ caller }) func submitInquiry(
    fullName : Text,
    email : Text,
    phone : Text,
    program : Text,
    message : Text,
  ) : async () {
    let inquiry : Inquiry = {
      id = nextId;
      fullName;
      email;
      phone;
      program;
      message;
      timestamp = Time.now();
      isRead = false;
    };
    inquiriesVar.add(nextId, inquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Admin only");
    };
    inquiriesVar.values().toArray();
  };

  public shared ({ caller }) func deleteInquiry(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Admin only");
    };
    switch (inquiriesVar.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?_) { inquiriesVar.remove(id) };
    };
  };

  public shared ({ caller }) func markInquiryRead(id : Nat, isRead : Bool) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Admin only");
    };
    let inquiry = switch (inquiriesVar.get(id)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
    let updatedInquiry : Inquiry = {
      id = inquiry.id;
      fullName = inquiry.fullName;
      email = inquiry.email;
      phone = inquiry.phone;
      program = inquiry.program;
      message = inquiry.message;
      timestamp = inquiry.timestamp;
      isRead;
    };
    inquiriesVar.add(id, updatedInquiry);
  };

  public query ({ caller }) func getUnreadInquiryCount() : async Nat {
    inquiriesVar.values().foldLeft(
      0,
      func(acc, inquiry) {
        if (not inquiry.isRead) { acc + 1 } else { acc };
      },
    );
  };
};
