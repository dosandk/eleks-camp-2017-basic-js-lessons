function dynamicMultiTable(a, b) {
    document.write('<table border=1, cellpadding=0, cellspacing=0, width="90%">');
    document.write("<tr>");
    for (let k = 1; k <= b; k++) {
        document.write("<td>" + (k * a) + "</td>");
    }
    document.write("</tr>");
    document.write("</table>");
}