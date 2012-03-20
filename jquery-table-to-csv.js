jQuery.fn.tableToCSV = function() {
    var csv_str = "";
    function createCSVRow(data) {
        var row = "";
        for (var i = 0; i < data.length; i++) {
            var cell = (""+data[i]).replace('"', '""');
			row += ~cell.indexOf(",") ? '"' + cell + '",' :  cell + ",";
        }
        return row.replace(/(,$)/, "");
    }
    this.each(function() {
        $("tr", this).each(function() {
            var cells = $("td,th", this).map(function() {
                return $(this).text();
            }).get();
            csv_str += createCSVRow(cells) + "\n";
        });
    });
    window.location = "data:text/csv;charset=utf=8;base64," + window.btoa(unescape(encodeURIComponent(csv_str)));
	return this;
};