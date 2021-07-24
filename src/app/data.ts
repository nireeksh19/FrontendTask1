import { Post } from "./Post";

export const data:Post[] = [
    {
        image: "https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1627257600&Signature=R9DRCoYbDXeQL1FP-bCiNVnH0pquWycAfu8XzpT2nzQQ7xgLtDdRZW5likZpiAIIBn5xCfX8bdF6lkQWooBHOCvtTozqzBl77xZU9oRO~Ayv1I7mxMCJUXDTXVZu1j~-XyWlbOKr6aZ4DquGMQ~fAAQY3MYYnDiHFiHsU70u9rGaLH-NY5KRxSzz~E3Sm7htfOd0GRzed1CnRGPrlZvGZaeuLNbVMQXmpOB74VUj38hMI~62LBu2g6Bx9ZvvFzN-PG9ZP6Gd2kVy1JcdfOf6WgwMMwNSlLKMfklJMND4Ri58KPUQgVdaeZllnOAZ8YaG7~1gU~Up1v~OfZRw8wGPrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        type : "Article",
        title : "What if famous brands had regular fonts? Meet RegulaBrands!",
        discription : "I’ve worked in UX for the better part of a decade. From now on, I plan to rei ...",
        profile : "https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1627257600&Signature=a5frn6nddMAc22qq1DseOZKEVrpX3U7U7ih1AoVVOTmg02EIE0ts6-2lX7Jm25FWUTtWGXmEdbjoYbq9TYyPgNt-qrc2-~VQgz3pljXSaOP2wXt4DtUCFGjA3K6LmgQ9pIKTDg7OkfjJL7uaw4RUPAvHVFfOls4EURYGKzuQRVGtXYz5bAOTj5aAQIYdm9YKtuBSdICuLdKEMYMYlsdEtUogCl4P5CMZScgf4IyHYW2l5b6aZXR6zlKsXj0J8uDUbEQ~lfFuB~RmSgYGvxK3yITfbfWszGwA96avq3PzBac-IhAvCY3bObQ4cKIEM4sshgPpsdIEg~bjxJGpgNNe~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        author : "Sarthak Kamra",
        likes : "1.4k Likes"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1627257600&Signature=Gavw-pS3TbNj1GayrTT~~Af-HdQPNfN8vAyVAGN5TAyAa7Pc-bG87~-dkDkR9iI3pm93pTx~mO2IEeem7ATe20qcNNa~Mut43pEghpVL8MUhLrueNrK2JvMDmavs-kksZwK3BT31PFqsgN9T8PJFdSICGRPLkvmG3ZSPYQIpkwOgWOCeyIF9v8MW7yOfOY~ui9XHeLXkIeoD65tyM4UIG7iHBJ2Vt0XivWYGhcPyFH3HGhEJCkfEp2nn1G1Kh0e9dWiXAwdfvRIp1ASK6zfpDiOCqDqoO5TusIdsS0Na79STy0igSAFRWcAFW93DJrUKPis13qFrgcw4kKetAsBqeA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        type : "Education",
        title : "Tax Benefits for Investment under National Pension Scheme launched by Government",
        discription : "I’ve worked in UX for the better part of a decade. From now on, I plan to rei ...",
        profile : "https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1627257600&Signature=S1rtCQVyeGM8Wr1HDBYHJM4GO9yCEdmPZJhGeJX9zCp2zv7pNLoRi2VEN49OWeEo7XvkBg-Q071jDvl0NVBk8RHbKEDQpw2l57mEZUs~mIWQ7QGxscKUJZUxOLbuTn2qhk~AAqvJoBAx3WACdQhEjTtM-sjUV1H~~9v7E1-btn8Qkk1GjluE2snanLMm0pMrXODWxzz2JAfmT4VlL14WXVftUk26Ej52gHhLVZ0UkQEl6A241r2EHOQo9hGIm68cXFlZYrT~MAd-I36wis-fZYTv~xUFDmFxd6JqGI6lXHpbCZLGzZ9zhuc2tTxjUBKJe2C036QMTVgNPIMZf2ZNKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        author : "Sarah West",
        likes : "1.4k Likes"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1627257600&Signature=KFjeAC70~5RMki27XK5gvW0aOLak~LJVTidfIFnXshWDSkeVFfh0y9L0nxyjxD6FO4-pMloQlPDFiDclQXf3keKVknX9eVXFTsdZbDb-6G4gSXIxF5Cj6HWdqspNRu-BQTaZ62V1ZSJe2FLlx~KRrY-lb7FS-7rv8K650hFo47AEpD~PQbkUX~tHiUQz41kBr63vp~YysoGeceIQxQfiycPKW4ENVGrOOYfrZb79xpCov5Kt9B3HKFMg2TRYbqm5leRqvwimzPMxtYjy~LIyldH7ttPMKle4U2U6KmtvAC0JMh79P-pkXlxfoMsn2dE-KKVSSwm28zbIv7NQz6Bkkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        type : "Meetup",
        date:"Fri, 12 Oct, 2018",
        title : "Finance & Investment Elite Social Mixer @Lujiazui",
        profile : "https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1627257600&Signature=XwAQz83qNpGVJoLNdjyLIjG9Up9lHDuV64a~fXZcBEVDUvAXKmG~p6SkikWCV7ETfnHRf-pN1wLHk-wmX8BZpP0wB8jk5ld7RPYLWmOqo4UnEAaye8x0GUkqfLATm6Z1V~IgApINidcDZe2IGJpakQ9FU9H4hcYVK4db-umB~1wgFEZjfwgR46SA3RbiqHjJHN4ziIkgRi5V02sVlhaw26A4T2-w9raTmJN0CRMKCYBvxxgEM4mdGayAhokTZPHyRxWfj7JLL~XSdClr~nbGD-KiXUzkyDKrSQg9bfLxaTr8cSIcmeLzlnrjE3gycvL2mRJlhCX8vVf~TkPN3iwF3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        author : "Ronal Jones",
        location: "Ahmedabad, India",
        likes : "1.4k Likes",
        buttonString: "Visit Website"
    },
    {
        type : "Job",
        title : "SoftWare Developer",
        profile : "https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1627257600&Signature=AXCoo0frTIU0OuIRs4NaCMFro9zHOac7IaKw~cRfJg5hOil~nZJcnH0zWq5mjlCcnPajQ7dULPkK8qobmCwDgETH1GJBWb163YJGNDB6ApFeFi~~iI24JW9t3TlAu~WGFlPYrxE9SibR2pBZC4Qh1EZQ-v-xDUFSMaubjU1HLIfXNnvLie7yoSI9fgIetmSIy65RaOJFuIOS-23HG-1jbr0Rf985gXEkrfvasB5qHaWPfEDhlg9q31g~P5GL0MifzeviXbf7N-kjv7ccpNglxRyFkNmz3IlVM~SnfBSWtltt26uzrO3v9oEYABcbMHTYt~1kQHcVny~SqwPc0keapQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        author : "Joseph Gray",
        job:"Innovaccer Analytics Private Ltd.",
        likes : "1.4k Likes",
        location :"Noida, India",
        buttonString : "Apply on Timesjobs"
    },

]