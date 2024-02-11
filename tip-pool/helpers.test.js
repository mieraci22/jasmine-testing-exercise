describe('Helper functions test', function() {
    // Setup for sumPaymentTotal tests
    beforeEach(function() {
      allPayments = {
        'payment1': { billAmt: '100', tipAmt: '15', tipPercent: 15 },
        'payment2': { billAmt: '200', tipAmt: '40', tipPercent: 20 }
      };
    });
  
    it('should sum total bill amounts correctly with sumPaymentTotal', function() {
      expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
  
    it('should sum total tip amounts correctly with sumPaymentTotal', function() {
      expect(sumPaymentTotal('tipAmt')).toEqual(55);
    });
  
    it('should calculate average tip percent correctly with sumPaymentTotal', function() {
      expect(sumPaymentTotal('tipPercent')).toEqual(35);
    });
  
    it('should calculate tip percent correctly with calculateTipPercent', function() {
      expect(calculateTipPercent(100, 15)).toEqual(15);
    });
  
    afterEach(function() {
      allPayments = {};
    });
  
    // Test for appendTd
    it('should append a td to a tr with appendTd', function() {
      let newTr = document.createElement('tr');
      appendTd(newTr, 'test');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  });
  
  describe('appendDeleteBtn', function() {
    it('should append a delete button to a table row', function() {
      let newTr = document.createElement('tr');
      appendDeleteBtn(newTr, 'server'); // Assuming 'server' as the type for this test
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerText).toEqual('X');
      expect(newTr.firstChild.className).toEqual('deleteBtn');
    });
  
    // A test for the click event would go here, but it's acknowledged as difficult without additional tools
  });
  