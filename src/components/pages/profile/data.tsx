import img from "../../../images/profile/person.jpg"

export interface profile {
    id: string,
    name: string,
    shaastrId: string,
    school: string,
    competitionsRegister : string[],
    workshopsAttend: string[],
    imgUrl: string
}

export const profiles : profile[] = [
    {
        id: "1",
        name: "Ashita Raaghavan",
        shaastrId: "abcs1234",
        school: "Kendriya Vidyalaya",
        competitionsRegister: ["1", "2"],
        workshopsAttend: ["1"],
        imgUrl: img
    },
    {
        id: "2",
        name: "Aditi",
        shaastrId: "abcs1234",
        school: "Kendriya Vidyalaya",
        competitionsRegister: ["1", "2"],
        workshopsAttend: ["1"],
        imgUrl: img
    }
]