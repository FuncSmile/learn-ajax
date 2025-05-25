# Contoh AJAX Request pakai XMLHttpRequest

Ini contoh gimana cara ngejalanin AJAX request pake JavaScript `XMLHttpRequest`.

## Penjelasan Kodenya

```js
// Bikin objek XMLHttpRequest buat request data ke server
const req = new XMLHttpRequest();

// Kalo request-nya udah kelar, jalanin function ini
req.onload = function () {
    // Parse response JSON biar bisa dipake di JS
    const data = JSON.parse(this.response);
    // Print id dari data yang di-fetch, cek hasilnya di console
    console.log(data.id);
};

// Kalo request-nya error, log error status-nya
req.onerror = function () {
    console.error("Error:", this.status);
};

// Mulai request pake metode GET ke URL yang ditentuin
req.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// Kirim request-nya, tunggu deh responsenya
req.send();
```

## Cara Kerjanya

1. **Bikin Request:** Bikin objek `XMLHttpRequest` buat handle AJAX call-nya.
2. **Handle Response:** Pas request kelar, response-nya di-parse dari JSON terus field `id` di-log ke console.
3. **Handle Error:** Kalo ada error, status error-nya di-log juga.
4. **Kirim Request:** Request dikirim ke API endpoint contoh.

## Referensi

- [Dokumentasi MDN XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [API JSONPlaceholder](https://jsonplaceholder.typicode.com/)
