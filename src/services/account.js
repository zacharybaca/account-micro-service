const Account = require("../models/account");

// Get account info by ID
function getAccountById(id) {
  return Account.findById(id);
}

// Get all account information
function getAllAccounts() {
  return Account.find({});
}

// Create account based on name, number, type and status
function createAccount(name, number, type, status) {
  return Account.create({ number, name, type, status });
}

// Delete account by account ID
async function deleteAccountById(id) {
  const deletedAccount = await Account.findByIdAndDelete(id);
  if (deletedAccount) {
    return true;
  }
  return false;
}
