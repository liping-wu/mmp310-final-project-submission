function isLeap(year) {
    return year % 4 == 0 ? (year % 100 != 0 ? 1 : (year % 400 == 0 ? 1 : 0)) : 0;
   }
   var i, k,
    today = new Date(),
    y = today.getFullYear(), 
    m = today.getMonth(), 
    d = today.getDate(), 
    firstday = new Date(y, m, 1), 
    dayOfWeek = firstday.getDay(), 
    days_per_month = new Array(31, 28 + isLeap(y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), 
    str_nums = Math.ceil((dayOfWeek + days_per_month[m]) / 7); 
   document.write("<table cellspacing='0'><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thur</th><th>Fri</th><th>Sat</th></tr>"); 
   for (i = 0; i < str_nums; i += 1) { 
    document.write('<tr>');
    for (k = 0; k < 7; k++) {
     var idx = 7 * i + k; 
     var date = idx - dayOfWeek + 1; 
     (date <= 0 || date > days_per_month[m]) ? date = '&nbsp;': date = idx - dayOfWeek + 1; 
     date == d ? document.write('<td class="today">' + date + '</td>') : document.write('<td>' + date + '</td>'); 
    }
    document.write('</tr>');
   }
   document.write('</table>');