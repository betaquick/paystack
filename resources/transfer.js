'use strict';

var root = '/transfer';

module.exports = {

  /*
  Initiate transfer
  @param: source, amount, currency, reason, recipient, reference
  */
  create: {
    method: 'post',
    endpoint: root,
    params: ['source*', 'amount*', 'currency', 'reason', 'recipient*', 'reference']
  },

  /*
  Initiate bulk transfer
  */
  bulk: {
    method: 'post',
    endpoint: [root, '/bulk'].join('')
  },

  /*
  List transfers
  */
  list: {
    method: 'get',
    endpoint: root
  },

  /*
  Fetch transfer
  */
  get: {
    method: 'get',
    endpoint: [root, '/{id}'].join(''),
    args: ['id']
  },

  /*
  Finalize transfer
  @param: transfer_code, otp
  */
  finalize: {
    method: 'post',
    endpoint: [root, '/finalize_transfer'].join(''),
    params: ['transfer_code*', 'otp']
  }
};
