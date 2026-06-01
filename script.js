document.addEventListener('DOMContentLoaded', () => {
    const screenPilihKelas = document.getElementById('pilihKelas');
    const screenJadwal = document.getElementById('jadwalUjian');
    const cards = document.querySelectorAll('.kelas-card');
    const btnKembali = document.getElementById('btnKembali');
    const namaKelasSpan = document.getElementById('namaKelas');
    const jadwalContainer = document.getElementById('jadwalContainer');

    // Data Jadwal PSAS dipisah berdasarkan Kelas
    const jadwalData = {
        "VII": [
            {
                tanggal: "Selasa, 02 Juni 2026",
                mapel: [
                    { jam: "07.00 - 08.30", nama: "Pendidikan Agama Islam", link: "https://script.google.com/macros/s/AKfycbwDayMPYjcQBXhC8Cv8jCVNEjjU3-sw9PEeggATiGeO_Hlb9UD8K2uhjgCvaiK7X2x5/exec" },
                    { jam: "08.45 - 10.15", nama: "Bahasa Indonesia", link: "https://script.google.com/macros/s/AKfycbylq-llM7HrE-EF4up4jSBSpDP0q12rkmayR_KebrDccmt1kvt0n6ruRPlJONFKkmKdQg/exec" },
                    { jam: "11.00 - 12.30", nama: "Bahasa Inggris (ABC)", link: "https://script.google.com/macros/s/AKfycbxVsdc2DqA2K5t8sZ4EyDJXGXQyEV9kzt1pmzSmyqiCrYCBEvb0Q-MaPmsZk7NITmzN7A/exec" },
                    { jam: "11.00 - 12.30", nama: "Bahasa Inggris (DEFG)", link: "https://script.google.com/macros/s/AKfycbwUvn7lz5HxRoPUZB6_ZXSvx40knNRH4YiJXvojzvbRrumbYXPCu2SdeLWZKDi-rT46Cg/exec" }
                ]
            },
            {
                tanggal: "Kamis, 04 Juni 2026",
                mapel: [
                    { jam: "07.00 - 08.30", nama: "Ilmu Pengetahuan Alam", link: "https://forms.gle/LinkIPAKelas7" },
                    { jam: "08.45 - 09.45", nama: "Informatika", link: "https://forms.gle/LinkInformatikaKelas7" },
                    { jam: "10.30 - 11.30", nama: "PJOK", link: "https://forms.gle/LinkPJOKKelas7" }
                ]
            }
        ],
        "VIII": [
            {
                tanggal: "Selasa, 02 Juni 2026",
                mapel: [
                    { jam: "07.00 - 08.30", nama: "Pendidikan Agama Islam", link: "https://script.google.com/macros/s/AKfycby2tYNjZdiU5-2DX2P6WfdC7C_N_12XEhH9exOMsEYUxWxYt94D2VxYpFMs8m8ADIKxdA/exec" },
                    { jam: "08.45 - 10.15", nama: "Bahasa Indonesia", link: "https://script.google.com/macros/s/AKfycbwDF1tEQk96o377EKEjqfNklERdxPasushqXTDcrtxPCa8zL8s4eBAi646my7PIku4_/exec" },
                    { jam: "11.00 - 12.30", nama: "Bahasa Inggris", link: "https://script.google.com/macros/s/AKfycbx2G4Vg4q3AAUduPUMZlUaYa-oPLPxAHt4R6T5ippHSw4jB8_0p1-liP1ayNIRfZytm/exec" }
                ]
            },
            {
                tanggal: "Kamis, 04 Juni 2026",
                mapel: [
                    { jam: "07.00 - 08.30", nama: "Ilmu Pengetahuan Alam", link: "https://forms.gle/LinkIPAKelas8" },
                    { jam: "08.45 - 09.45", nama: "Informatika", link: "https://forms.gle/LinkInformatikaKelas8" },
                    { jam: "10.30 - 11.30", nama: "PJOK", link: "https://forms.gle/LinkPJOKKelas8" }
                ]
            }
        ]
    };

    // Event saat kartu kelas di-klik
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const kelas = card.getAttribute('data-kelas'); // Mengambil nilai "VII" atau "VIII"
            namaKelasSpan.textContent = kelas;
            
            // Panggil fungsi render dengan mengirimkan kelas yang dipilih
            renderJadwal(kelas);

            // Animasi pindah layar
            screenPilihKelas.classList.remove('active');
            setTimeout(() => {
                screenJadwal.classList.add('active');
            }, 300);
        });
    });

    // Event tombol kembali
    btnKembali.addEventListener('click', () => {
        screenJadwal.classList.remove('active');
        setTimeout(() => {
            screenPilihKelas.classList.add('active');
        }, 100);
    });

    // Fungsi membuat elemen HTML untuk jadwal timeline
    function renderJadwal(kelas) {
        jadwalContainer.innerHTML = '<div class="timeline"></div>';
        const timelineEl = jadwalContainer.querySelector('.timeline');
        
        // Ambil data spesifik berdasarkan kelas yang diklik (VII atau VIII)
        const jadwalPilihan = jadwalData[kelas];
        
        jadwalPilihan.forEach(hari => {
            const item = document.createElement('div');
            item.className = 'timeline-item';

            // Badge Tanggal
            let htmlContent = `<div class="tanggal-badge"><i class="fa-regular fa-calendar-check"></i> ${hari.tanggal}</div>`;
            
            // List Mapel
            htmlContent += `<div class="mapel-cards">`;
            hari.mapel.forEach(m => {
                htmlContent += `
                    <a href="${m.link}" target="_blank" class="mapel-card">
                        <div class="jam"><i class="fa-regular fa-clock"></i> ${m.jam}</div>
                        <div class="nama-mapel">
                            ${m.nama} 
                            <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                        </div>
                    </a>
                `;
            });
            htmlContent += `</div>`;

            // Masukkan ke dalam timeline item
            item.innerHTML = htmlContent;
            timelineEl.appendChild(item);
        });
    }
});