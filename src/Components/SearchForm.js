import React, {useState} from 'react';

const SearchForm = () => {

  const [option, setOption] = useState("placeholder");

  const handleOption = (e) => {
    setOption(e.currentTarget.value);
  }

  return (
    <form>
      <select value={option} onChange={handleOption}>
        <option value="placeholder" disabled>wybierz nauczycielkę</option>
        <option value="UCBakkxKoa1gHXTTxf2O-QVQ">Ania Brzegowa / Joga Fusion</option>
        <option value="UC5-zHpWF_75thcj6CY9dFNQ">Patrycja Gawlińska / joginka.pl</option>
        <option value="UCw-HC1NizWhlcFy7UT0kGcQ">Natalia Knopek / simplife.pl</option>
        <option value="UCQTmnNx1Fymydue1xAs19rQ">Gosia Kobus / Anatomia Jogi</option>
        <option value="UCITlHzj4MUzRNM17pdWUWeQ">Gosia Mostowska</option>
        <option value="UCpqYY3zU3PbEPZ_7P-woiAw">Basia Tworek</option>
        <option value="UCzxhVfSsbG08fpSbLOl3O6Q">Agata Ucińska</option>
        <option value="UCRZ3g1sUHp6cj87y1FE1YEQ">Eli Wierkowska / YOGA by Eli</option>
      </select>
    </form>
  )
}

export default SearchForm;