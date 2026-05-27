const URL = "https://script.google.com/macros/s/AKfycbzekVMi8lJn-ZttNiDcwel0GmyEOi0iCZ2ZVDnkGBVngvgSOY32Q7zrNABMt4kkTfza/exec";

const btnGuardar = document.getElementById("btnGuardar");
const mensaje = document.getElementById("mensaje");

btnGuardar.addEventListener("click", guardar);

function guardar() {
    const tipo = document.getElementById("tipo").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value.trim();
    const monto = document.getElementById("monto").value;

    if (descripcion === "" || monto === "") {
        mensaje.style.color = "red";
        mensaje.textContent = "Completá descripción y monto.";
        return;
    }

    const datos = {
        tipo: tipo,
        categoria: categoria,
        descripcion: descripcion,
        monto: Number(monto)
    };

    fetch(URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "datos=" + encodeURIComponent(JSON.stringify(datos))
    });

    mensaje.style.color = "green";
    mensaje.textContent = "Guardado correctamente.";

    document.getElementById("descripcion").value = "";
    document.getElementById("monto").value = "";
}