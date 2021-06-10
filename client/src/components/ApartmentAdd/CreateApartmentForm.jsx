


const CreateApartmentForm = ({allBuildings, handleInputChange, handleSubmit, input}) => {

    return (
        <>
            <h1>Desde ApartmentForm</h1>
			<form>
				<select>
					<option value="" key="">
						Select building
					</option>
					{allBuildings?.map((building, idx) => {
						return (
							<option value={building.id} key={idx}>
								{building.name}
							</option>
						);
					})}
				</select>
				<input
					type="text"
					name="cata_apartment"
					value={input.cata_apartment}
					onChange={handleInputChange}
				/>{' '}
				cata_apartment
				<input
					type="text"
					name="owner"
					value={input.owner}
					onChange={handleInputChange}
				/>{' '}
				owner
				<input
					type="text"
					name="mt2"
					value={input.mt2}
					onChange={handleInputChange}
				/>{' '}
				mt2
				<input
					type="text"
					name="commons"
					value={input.commons}
					onChange={handleInputChange}
				/>{' '}
				commons
				<input
					type="text"
					name="expense"
					value={input.expense}
					onChange={handleInputChange}
				/>{' '}
				expense
				<input
					type="text"
					name="state"
					value={input.state}
					onChange={handleInputChange}
				/>{' '}
				state
				<input
					type="text"
					name="building"
					value={input.building}
					onChange={handleInputChange}
				/>{' '}
				building
				<input type="button" value="CREAR" onClick={handleSubmit} />
			</form>
        </>
    )


}
export default CreateApartmentForm;
