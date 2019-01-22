const src = new URL(import.meta.url).pathname
Array.from(document.querySelectorAll(`script[id^="script-"]`)).find( s => s.src.includes(src)).dataset.done = true;
