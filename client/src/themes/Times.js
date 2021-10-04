export const Times = [
	"18:00",
	"19:00",
	"20:00",
	"21:00",
	"22:00",
	"23:00",
	"24:00",
	"01:00",
	"02:00",
	"03:00",
	"04:00",
	"05:00",
	"06:00",
	"07:00",
	"08:00",
	"09:00",
	"10:00",
	"11:00",
	"12:00",
	"13:00",
	"14:00",
	"15:00",
	"16:00",
	"17:00",
];

export const whenTime = (date) => {
	const today = new Date();
	const times = new Date(date);

	const Timevalue = Math.floor((today.getTime() - times.getTime()) / 1000 / 60);
	if (Timevalue < 5) {
		return "방금 전";
	}
	if (Timevalue < 60) {
		return `${Timevalue}분 전`;
	}
	const betweenTimeHour = Math.floor(Timevalue / 60);
	if (betweenTimeHour < 24) {
		return `${betweenTimeHour}시간 전`;
	}
	const betweenTimeDay = Math.floor(Timevalue / 60 / 24);
	if (betweenTimeDay < 365) {
		return `${betweenTimeDay}일 전`;
	}
	return `${Math.floor(betweenTimeDay / 365)}년 전`;
};
