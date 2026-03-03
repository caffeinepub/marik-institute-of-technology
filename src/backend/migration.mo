import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
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

  type OldActor = {};
  type NewActor = {
    inquiriesVar : Map.Map<Nat, Inquiry>;
    nextId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    {
      inquiriesVar = Map.empty<Nat, Inquiry>();
      nextId = 1;
    };
  };
};
