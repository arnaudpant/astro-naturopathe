type HeadTitle = {
    title: string;
    description: string;
}

type LinkNav = {
    text: string;
    url: string
}

export const baseData: HeadTitle = {
    title: "Naturopathe sophrologue coach sportif 26300 Marches",
    description: "A FAIRE"
}

export const linksData: LinkNav[] = [
    {
        text: "Accueil",
        url: "/"
    },
    {
        text: "Naturopathie",
        url: "/role-naturopathie"
    },
    {
        text: "Tarifs",
        url: "/tarifs"
    },
    {
        text: "A propos",
        url: "/about-naturologie-sophrologie"
    },
    {
        text: "Relaxations guidées",
        url: "/audios"
    },
    {
        text: "Ateliers",
        url: "/ateliers"
    },
]