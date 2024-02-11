describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic: clean up DOM and reset variables
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = ''; // Clears out the table entries
  });

  // Test for updateServerTable function
  it('should update server table on updateServerTable()', function() {
    submitServerInfo(); // This adds a server which we'll then check

    // Directly call updateServerTable to ensure the DOM is updated
    updateServerTable();

    let addedServerName = serverTbody.children[0].firstChild.innerText;
    let expectedServerName = 'Alice';
    expect(addedServerName).toEqual(expectedServerName);

    let addedServerEarnings = serverTbody.children[0].lastChild.innerText;
    let expectedEarnings = '$0.00'; // Assuming no payments have been added yet, so earnings should be 0
    expect(addedServerEarnings).toEqual(expectedEarnings);
  });
});
