class Broadecaster {
  constructor() {
    this.audiences = [];
  }

  subscribe(audience) {
    this.audiences.push(audience);
  }

  unsubscribe(audience) {
    const index = this.audiences.indexOf(audience);
    this.audiences.splice(index, 1);
  }

  setContent(content) {
    this.audiences.forEach((audience) => {
      audience.innerText = content;
    });
  }
}

const p = document.getElementById('output');

const broadcaster = new Broadecaster();
broadcaster.subscribe(p);

document.querySelector('input').addEventListener('keyup', function () {
  broadcaster.setContent(this.value);
});
 