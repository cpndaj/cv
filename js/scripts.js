 function toggleZoom(id, btn) { 
        const el = document.getElementById(id);
        el.classList.toggle('zoom-active');
        btn.innerHTML = el.classList.contains('zoom-active') ? '✖' : '🔍';
    }
   
   function magnifyMe(pBtn) {
       const cNum =  pBtn.id.replace('btn', '').replace('Close', '');
        document.getElementById('bubble'+cNum).classList.toggle('zoomText'+cNum);
    }