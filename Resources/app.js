var window = Ti.UI.currentWindow;
var firstName = Ti.UI.createTextField({
  value:'',
  width:300,
  height: 40,
  left: 5,
  hintText: 'First Name:',
  returnKeyType:Titanium.UI.RETURNKEY_NEXT,
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE
});

var lastName = Ti.UI.createTextField({
  value:'',
  height: 40,
  passwordMask: true,
  hintText: 'Last Name',
  width:300,
  left: 5,
  borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
  returnKeyType:Titanium.UI.RETURNKEY_DONE
});

firstName.addEventListener('return', function(event) {
  lastName.focus();
});

lastName.addEventListener('return', function(event) {
  // submit your form here
});

var table = Ti.UI.createTableView({
  style: Ti.UI.iPhone.TableViewStyle.GROUPED,
  rowHeight: 40
});

var section = Ti.UI.createTableViewSection({headerTitle: "Welcome To Supreme"});
    
var row = Ti.UI.createTableViewRow();
row.add(firstName);
row.hasChild = false;
row.className = "field";
section.add(row);

var prow = Ti.UI.createTableViewRow();
prow.add(lastName);
prow.hasChild = false;
prow.className = "field";
section.add(prow);
table.setData([section]);

window.add(table);
