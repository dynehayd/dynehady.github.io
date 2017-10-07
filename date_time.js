function date_time(id)
{
    date = new Date; //get the current date from the date class
    year = date.getFullYear(); //current year
    month = date.getMonth(); //current month
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    d = date.getDate();
    day = date.getDay(); //current day
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    h = date.getHours();
    if(h<10) //this is because if it's say 8 in the morning it'll need a spacer in front of the 8
    {
        h = "0"+h;
    }
    m = date.getMinutes();//this is because if it's say 8:05 in the morning it'll need a spacer in front of the 8:05
    if(m<10)
    {
        m = "0"+m;
    }
    s = date.getSeconds();//this is because if it's say 8:05:06 in the morning it'll need a spacer in front of the 8:05:06
    if(s<10)
    {
        s = "0"+s;
    }
    result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s; //what will be displayed
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("'+id+'");','1000');
    return true;
}