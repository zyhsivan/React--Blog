import ZRequest from "../index";

export function getAllArticle() {
  return ZRequest.get({
    url: "/allArticle",
  });
}

export function getOneArticle(id: number) {
  return ZRequest.get({
    url: "/oneArticle",
    params: { id },
  });
}

export function getOneTypeArticle(id: number) {
  return ZRequest.get({
    url: "typeArticle",
    params: { id },
  });
}
