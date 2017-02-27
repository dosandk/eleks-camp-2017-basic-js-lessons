function multiTable() {
    document.write(' <table border=1, cellpadding=0, cellspacing=0, width="90%">');
    for (i = 1; i <= 9; i++) {
        document.write("<tr>");

        for (k = 1; k <= 9; k++) {
            document.write("<td>" + (k * i) + "</td>");
        }

        document.write("</tr>");
    }
    document.write("</table>");
}