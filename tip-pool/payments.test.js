describe('Payments test', function() {
    beforeEach(function() {
      // Setup DOM elements needed for testing payments
      billAmtInput.value = '100';
      tipAmtInput.value = '15';
    });
  
    it('should add a payment to allPayments on submitPaymentInfo', function() {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('15');
      expect(allPayments['payment1'].tipPercent).toEqual(15);
    });
  
    it('should not add a payment on submitPaymentInfo with empty input', function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    afterEach(function() {
      // Reset DOM and allPayments
      allPayments = {};
      paymentTbody.innerHTML = '';
      summaryTds.forEach(function(td) { td.innerHTML = ''; });
      billAmtInput.value = '';
      tipAmtInput.value = '';
    });
  
    // Additional tests for createCurPayment, appendPaymentTable, and updateSummary would follow
  });
  