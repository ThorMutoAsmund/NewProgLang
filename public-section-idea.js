class Company {
  property StaffInternal;
  properties PendingMessages;

  sendMessageNow(staffName, message) {
    this.StaffInternal.filter(s => s.name == staffName).map(s => s.sendMessage(message));
  }

  public {
    property Staff { get() => this.Staff.filter(s => !s.isHidden) }

    sendMessage(staffName, message) {
      this.PendingMessages.push({ staffName, message });
    }
  }
}


class CompanyReusingNames {
  property Staff;
  property Name;
  properties PendingMessages;
  
  sendMessageNow(staffName, message) {
    this.Staff.filter(s => s.name == staffName).map(s => s.sendMessage(message));
  }

  protected {
    // Expose getter, but not setter, to classes that contain this class
    property Staff { get() => private.Staff }   
  }

  public {
    property Staff { get() => private.Staff.filter(s => !s.isHidden) }
    
    // Expose private property
    property Name -> private.Name;  

    sendMessage(staffName, message) {
      this.PendingMessages.push({ staffName, message });
    }
  }
}