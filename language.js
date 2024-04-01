var langs =
[
 ['English',         ['en-AU', 'Australia'],
                     ['en-CA', 'Canada'],
                     ['en-IN', 'India'],
                     ['en-NZ', 'New Zealand'],
                     ['en-ZA', 'South Africa'],
                     ['en-GB', 'United Kingdom'],
                     ['en-US', 'United States']],
 ['Français',        ['fr-FR']],
 ['हिन्दी', ['hi-IN']],
 ['বাংলা',           ['bn-BD']]

];

let select_language = document.querySelector('#select_language');
let select_dialect = document.querySelector('#select_dialect');

for (var i = 0; i < langs.length; i++) {
  select_language.options[i] = new Option(langs[i][0], i);   //itrating the array
}
select_language.selectedIndex = 2;
updateLanguage();
select_dialect.selectedIndex = 2;

function updateLanguage() {
  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
    select_dialect.remove(i);
  }
  var list = langs[select_language.selectedIndex];
  for (var i = 1; i < list.length; i++) {
    select_dialect.options.add(new Option(list[i][1], list[i][0]));
  }
  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}