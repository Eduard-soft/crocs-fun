import React from 'react';

const CrocsFiltersOption = () => {
	return (
		<div className='mt-10 flex items-center justify-between'>
			<div>
				<h2
					className='text-[30px] font-bold'>
						Каталог кроксов
				</h2>
				<h2>Смотрите модели по вашим предпочтениям</h2>
			</div>
			<div className='flex gap-5'>
				<select className="select select-bordered w-full max-w-xs">
 					<option disabled selected>По модели</option>
 					<option>Мужские</option>
 					<option>Женские</option>
					<option>Детские</option>
				</select>
				<select className="select select-bordered w-full md:block max-w-xs hidden">
 					<option disabled selected>По цене</option>
 					<option>Дороже</option>
 					<option>Дешевле</option>
				</select>
				<select className="select select-bordered w-full md:block max-w-xs hidden">
 					<option disabled selected>По размеру</option>
 					<option>18</option>
 					<option>19</option>
					<option>20</option>
 					<option>21</option>
					<option>22</option>
 					<option>23</option>
					<option>24</option>
 					<option>25</option>
					<option>18</option>
 					<option>19</option>
					<option>20</option>
 					<option>21</option>
					<option>22</option>
 					<option>23</option>
					<option>24</option>
 					<option>25</option>
					<option>26</option>
 					<option>27</option>
					<option>28</option>
 					<option>29</option>
					<option>30</option>
 					<option>31</option>
					<option>32</option>
 					<option>33</option>
					<option>34</option>
 					<option>35</option>
					<option>36</option>
 					<option>37</option>
					<option>38</option>
 					<option>39</option>
					<option>40</option>
 					<option>41</option>
					<option>42</option>
 					<option>43</option>
				</select>
			</div>
		</div>
	);
}

export default CrocsFiltersOption;
