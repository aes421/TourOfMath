import GroupDto from "../models/groupDto";
import BookDto from "../models/bookDto";
import elementaryAlgebraImg from "../assets/elementary-algebra.jpg";
import preAlgebraImg from "../assets/pre-algebra.jpg";

const algebra = new GroupDto(0, 0, "Algebra", [
  new BookDto("Pre-Algebra Mathematics", preAlgebraImg, "", 28, ""),
  new BookDto("Elementary Algebra", elementaryAlgebraImg, "", 48, ""),
]);

const discreteMath = new GroupDto(1, 0, "Discrete Math", [
  new BookDto(
    "Discrete Mathematical Structures",
    elementaryAlgebraImg,
    "",
    95,
    ""
  ),
  new BookDto(
    "Discrete Mathematics and its Applications",
    elementaryAlgebraImg,
    "",
    130,
    ""
  ),
  new BookDto(
    "Discrete and Combinatorial Mathematics",
    elementaryAlgebraImg,
    "",
    171,
    ""
  ),
]);

const temp = new GroupDto(2, 0, "Algebra", [
  new BookDto("Pre-Algebra Mathematics", preAlgebraImg, "", 28, ""),
  new BookDto("Elementary Algebra", elementaryAlgebraImg, "", 48, ""),
]);

algebra.addEdge(temp);
discreteMath.addEdge(temp);
export const subjects = [algebra, discreteMath, temp];
