function addToList () {
    for(let i = 0; i < 5; i++){
        let image;
        let title;
        let studio;

        let row = localStorage.getItem("row" + i);
        let column = localStorage.getItem("column" + i);
        let time = localStorage.getItem("time", i);
        let date = localStorage.getItem("date" + i);

        let item = `<li><img src="${image}"><h1>${title}</h1><h2>Seat: ${row}${column}</h2><h2>Time: ${time}</h2><h2>Date: ${date}</h2><p>${studio}</p></li>`;

        if(localStorage.getItem("movID" + i)){
            title = "Test: Endgame";
            studio = i + "Studio";
        }

        else{
            title = "Empty";
            studio = "Empty";
            
            row = "Empty";
            column = "Empty";
            time = "Empty";
            date = "Empty";
        }
        
        $(`#lv_user`).append(item);
        $(`#lv_user`).trigger('create');
        $(`#lv_user`).listview('refresh');
    }
}

$(function(){
    request.done(function(){
        console.log();
        addToList();
    });
});