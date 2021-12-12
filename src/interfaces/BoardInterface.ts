interface IBoard {
    id:number;
    year: string;
    board: IBoardMemberDetails[];
}

interface IBoardMemberDetails {
    id:number;
    name: string;
    position: string;
    image:string;
    socialmedia:ISocialmedia;
}

interface ISocialmedia {
    facebook: string;
    linkedin: string;
    instagram: string;
    twitter: string;
    mlsa ?:string;
}

export type { IBoard, IBoardMemberDetails };
