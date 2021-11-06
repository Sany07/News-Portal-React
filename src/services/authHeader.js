export default function authHeader() {
    const user = localStorage.getItem("ItechJWT");
    console.log(user);
    if (user) {
        return { Authorization: "Bearer " + user };
    } else {
        return {};
    }
}
