class Company {
  property StaffInternal;

  properties PendingMessages;

  sendMessageNow(staffName, message) {
    this.StaffInternal.filter(s => s.name == staffName).map(s => s.sendMessage(message));
  }

  scope 

  public {
    property Staff { get() => this.Staff.filter(s => !s.isHidden) }

    sendMessage(staffName, message) {
      this.PendingMessages.push({ staffName, message });
    }
  }
}