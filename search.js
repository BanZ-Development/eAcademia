function search()
{
    let search = document.getElementById("search").innerHTML;

    let chars = search.split(/(?!$)/u);
    console.log(chars);
}