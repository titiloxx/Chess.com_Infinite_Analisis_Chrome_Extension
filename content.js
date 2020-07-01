function appendHtml(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      el.appendChild(div.children[0]);
    }
  }

EjecutarAnalisis=async ()=>{
    const gameId=window.location.pathname.split('live/')[1].split('/')[0];
    const response=await (await fetch(`https://mzrorw3zea.execute-api.us-east-1.amazonaws.com/Prod/Analisis?value=${gameId}`,{method:"POST"})).text()
    alert(response)
    location.reload();
}

setTimeout(x=>{
//Elimina el window del trial
if (document.querySelector("#board-layout-chessboard > div.modal-trial-component")){
    document.querySelector("#board-layout-chessboard > div.modal-trial-component").remove()
    var html = '<div class="board-tab-item-component sidebar-tab" onclick="EjecutarAnalisis()"><div class="icon-font-component board-tab-item-icon"><span class="icon-font-chess chip icon-font-primary"></span></div> <span class="board-tab-item-label">Ejecutar Analisis</span> <!----></div>';
    appendHtml(document.querySelector("#board-layout-sidebar > div.sidebar-component > div.board-tab-container-component.sidebar-tab-container"), html); // "body" has two more children - h1 and span.
}
},1500)


