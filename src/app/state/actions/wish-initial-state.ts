import { IcatalogData } from "./wish.actions";

export const catalogDataInitialState: IcatalogData = {
    whished: [],
    mockData: [
        {
            id: "mock-01",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000053966/849c234de8df7265201d26d9d72f88eed3f32438d3dca12fc135beb4c3befc85",
            title: "Pokémon Scarlet",
            date: "18/11/2022",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-02",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000053971/842b2784d91520d41a947dec17fac116fec889bb1f1db4023615af8429dae00d",
            title: "Pokémon Violet",
            date: "18/11/2022",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-03",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70070000014505/806672da8ad9d463d1f9b5bb1b6ac4afb04cdf2e0b60c46902fbde4afb565839",
            title: "Paquete doble de Pokémon Scarlet y Pokémon Violet",
            date: "18/11/2022",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "2,798.00",
            isFavorite: false
        },
        {
            id: "mock-04",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000046395/4555efa9f2061f7d1e1646ab3d3af790a7491270b1b3e32e730273e9ac096827",
            title: "Splatoon 3",
            date: "09/09/2022",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-05",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000053336/e933b48650b33b355e9cf2583da5c94b77180e40fb02d050041083dd62f4df39",
            title: "Xenoblade Chronicles 3",
            date: "29/07/2022",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-06",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/es_LA/games/switch/k/kirbys-dream-buffet-switch/hero",
            title: "Kirby's Dream Buffet",
            date: "17/08/2022",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "355.00",
            isFavorite: false
        },
        {
            id: "mock-07",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000049936/a2f2110d63e18a774199c31dceb310a562b0d8d072c7b4a92dd4faa36f1bfc71",
            title: "Mario Strikers: Battle league",
            date: "10/06/2022",
            version: {
                isOn: true,
                classText: "box-version-test",
                text: "Versión de prueba gratuita"
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-08",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000035797/f3dc6aa2e25ab6d713ac5da17e90ce676dfadf6a0b8fefb37b8b5159d89fc36c",
            title: "MARIO + RABBIDS SPARKS OF HOPE",
            date: "20/10/2022",
            version: {
                isOn: true,
                classText: "box-version-test",
                text: "Versión de prueba gratuita"
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-09",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000043292/91e382e3e87726746dc714d3cab616a57ead6d797cff8c2f757b448534ce7cf4",
            title: "Pokémon UNITE",
            date: "21/07/2021",
            version: {
                isOn: true,
                classText: "box-version-free",
                text: "Descarga gratuita"
            },
            price: "Gratis",
            isFavorite: false
        },
        {
            id: "mock-10",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000010192/f2aceaa07354abfa1652dbfb5acede2f4b2844db3c37780d538020f51814d510",
            title: "FORNITE",
            date: "12/06/2018",
            version: {
                isOn: true,
                classText: "box-version-free",
                text: "Descarga gratuita"
            },
            price: "Gratis",
            isFavorite: false
        },
        {
            id: "mock-11",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000042975/f365acdf12fbbb0cce6b4638a7d3756c6e0010a0f46cadc1fe3cafc6d40c1b7e",
            title: "Fall Guys",
            date: "21/06/2022",
            version: {
                isOn: true,
                classText: "box-version-free",
                text: "Descarga gratuita"
            },
            price: "Gratis",
            isFavorite: false
        },
        {
            id: "mock-12",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
            title: "Minecraft",
            date: "20/06/2018",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "499.00",
            isFavorite: false
        },
        {
            id: "mock-13",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9",
            title: "Super Smash Bros. Ultimate",
            date: "07/12/2018",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-14",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
            title: "The Legend of Zelda: Breath of the Wild",
            date: "03/03/2017",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-15",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000001620/2b166fb3197dacfde1d939acd6a976b9fbe3b1a32c54f9f0d2c8d23efb22412d",
            title: "Luigi's Mansion 3",
            date: "31/10/2019",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-16",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/software/switch/70010000045649/bf9665c0d3f4f99954d8faa8f426e63a1e3cd1eec297b4f10d5954d9d188b199",
            title: "Sonic Origins",
            date: "23/06/2022",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "599.99",
            isFavorite: false
        },
        {
            id: "mock-17",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_200/ncom/software/switch/70010000008122/453d17f26995df6bd67d698c90ba2fd27157a61875e1a9730545da23474c6aaf",
            title: "DARK SOULS: REMASTERED",
            date: "19/08/2010",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "999.00",
            isFavorite: false
        },
        {
            id: "mock-18",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_200/ncom/software/switch/70010000016330/d94d2186ef03c930392253c83c84af0c73b7e57cd902a526b09b4155a25930fe",
            title: "Cuphead",
            date: "18/04/2019",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "349.00",
            isFavorite: false
        },
        {
            id: "mock-19",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_200/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51",
            title: "Hollow Knight",
            date: "12/06/2018",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "149.99",
            isFavorite: false
        },
        {
            id: "mock-20",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_200/ncom/es_LA/games/switch/u/unpacking-switch/hero",
            title: "Unpacking",
            date: "02/11/2021",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "399.00",
            isFavorite: false
        },
        {
            id: "mock-21",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_300/ncom/es_LA/games/switch/s/subnautica-switch/hero",
            title: "Subnautica",
            date: "14/05/2021",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "749.00",
            isFavorite: false
        },
        {
            id: "mock-22",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_300/ncom/software/switch/70010000009167/3ff8d0aa4048daea5a804e19aaec5681b9123622362cb0c7584ef9341d5ced2c",
            title: "DRAGON QUEST BUILDERS 2",
            date: "12/07/2019",
            version: {
                isOn: true,
                classText: "box-version-test",
                text: "Versión de prueba gratuita"
            },
            price: "1,999.00",
            isFavorite: false
        },
        {
            id: "mock-23",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_300/ncom/software/switch/70010000042924/c7e6839975afd46893274cf7cfdb63b39a54d6f700938bcd1c8849ac66755d00",
            title: "Metroid Dread",
            date: "08/10/2021",
            version: {
                isOn: true,
                classText: "box-version-test",
                text: "Versión de prueba gratuita"
            },
            price: "1,399.00",
            isFavorite: false
        },
        {
            id: "mock-24",
            img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_300/ncom/software/switch/70010000021243/2867540f77c4c8078f08adf2f1352410943af0c75af61a9a5768f2197327fca5",
            title: "No More Heros 3",
            date: "27/08/2021",
            version: {
                isOn: false,
                classText: "",
                text: ""
            },
            price: "1,399.00",
            isFavorite: false
        },
    ]
}