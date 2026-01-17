function buka() {
  const pass = document.getElementById("pass").value;
  if (pass === "dd-mm-yyyy") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("isi").classList.remove("hidden");

    const musik = document.getElementById("musik");
    musik.volume = 0.8;
    musik.play().catch(() => {
      alert("Tap layar sekali untuk mulai lagu 💕");
    });
  } else {
    document.getElementById("salah").innerText = "Password salah 😭";
  }
}
