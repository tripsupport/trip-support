<script>
	import Rooms from './Rooms.svelte';
	import RoomsMob from './RoomsMob.svelte';
	import Hotels from '../hotels/Hotels.svelte';
	import HotelsMob from '../hotels/HotelsMob.svelte';
	import TravellersHotVac from './TravellersHotVac.svelte';
	import TravellersHotVacMob from './TravellersHotVacMob.svelte';
</script>

<!-- OneWay Tab -->

<div class="col-span-12 md:col-span-4 flex md:justify-end justify-start">
	<div class="hidden sm:flex col-span-2 lg:col-span-1">
		<TravellersHotVac />
	</div>

	<div class="sm:hidden flex col-span-2 lg:col-span-1">
		<TravellersHotVacMob />
	</div>

	<div class="hidden sm:flex col-span-2 lg:col-span-1">
		<Rooms />
	</div>

	<div class="sm:hidden fex col-span-2 lg:col-span-1">
		<RoomsMob />
	</div>
</div>

<div class="hidden sm:block">
	<Hotels />
</div>

<div class="block sm:hidden">
	<HotelsMob />
</div>
