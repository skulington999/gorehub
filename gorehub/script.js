// ============================================================
// TES 10 VIDÉOS
// ============================================================

const videos = [

    {
        id: 1,
        youtube: "YOUTUBE_ID_1"
    },

    {
        id: 2,
        youtube: "YOUTUBE_ID_2"
    },

    {
        id: 3,
        youtube: "YOUTUBE_ID_3"
    },

    {
        id: 4,
        youtube: "YOUTUBE_ID_4"
    },

    {
        id: 5,
        youtube: "YOUTUBE_ID_5"
    },

    {
        id: 6,
        youtube: "YOUTUBE_ID_6"
    },

    {
        id: 7,
        youtube: "YOUTUBE_ID_7"
    },

    {
        id: 8,
        youtube: "YOUTUBE_ID_8"
    },

    {
        id: 9,
        youtube: "YOUTUBE_ID_9"
    },

    {
        id: 10,
        youtube: "YOUTUBE_ID_10"
    }

];


// ============================================================
// FONCTION POUR CRÉER UNE MINIATURE
// ============================================================

function createVideoThumbnail(video, className) {

    const link = document.createElement("a");

    link.href = `video.html?id=${video.id}`;

    link.className = className;


    // CONTENEUR
    const thumbnail = document.createElement("div");

    thumbnail.className = "thumbnail";


    // IMAGE DE LA MINIATURE
    const image = document.createElement("img");

    image.src =
        `assets/thumbnails/${String(video.id).padStart(2, "0")}.jpg`;

    image.alt = "";


    // PNG PAR-DESSUS
    const overlay = document.createElement("img");

    overlay.src =
        "assets/thumbnail-overlay.png";

    overlay.className = "thumbnail-overlay";

    overlay.alt = "";


    // ASSEMBLAGE
    thumbnail.appendChild(image);

    thumbnail.appendChild(overlay);

    link.appendChild(thumbnail);


    return link;
}


// ============================================================
// PAGE D'ACCUEIL
// ============================================================

const homeVideoList =
    document.getElementById("home-video-list");


if (homeVideoList) {

    videos.forEach(video => {

        const thumbnail =
            createVideoThumbnail(
                video,
                "home-video"
            );

        homeVideoList.appendChild(thumbnail);

    });

}


// ============================================================
// PAGE VIDÉO
// ============================================================

const youtubeVideo =
    document.getElementById("youtube-video");


if (youtubeVideo) {

    const params =
        new URLSearchParams(
            window.location.search
        );


    let currentId =
        Number(params.get("id"));


    // SI L'ID N'EXISTE PAS → VIDÉO 1
    if (
        !currentId ||
        currentId < 1 ||
        currentId > videos.length
    ) {

        currentId = 1;

    }


    const currentVideo =
        videos.find(
            video => video.id === currentId
        );


    // YOUTUBE
    youtubeVideo.src =
        `https://www.youtube-nocookie.com/embed/${currentVideo.youtube}?rel=0`;

}


// ============================================================
// MINIATURES À DROITE DE LA VIDÉO
// ============================================================

const sideVideoList =
    document.getElementById("side-video-list");


if (sideVideoList) {

    videos.forEach(video => {

        const thumbnail =
            createVideoThumbnail(
                video,
                "side-video"
            );

        sideVideoList.appendChild(thumbnail);

    });

}