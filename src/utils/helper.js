function compareTime(t1,t2){
    let date1=new Date(t1);
    let date2=new Date(t2);
    return date1.getTime()>date2.getTime();
}

module.exports={
    compareTime
}