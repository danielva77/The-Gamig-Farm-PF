   <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        name="buscar"
        placeholder="Search ..."
        onChange={(e) => { handleInputChange(e) }}
        // value={input.buscar} 
        autoComplete="off"
      ></input>
      <img className="lupaa" src={lupa} alt="lupa" onClick={(e) => { handleSubmit(e) }} />
      {/* </div> */}
    </div>