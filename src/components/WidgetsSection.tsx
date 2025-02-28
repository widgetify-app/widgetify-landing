export default function WidgetsSection() {
	return (
		<section className="space-y-6">
			<h2 className="text-2xl font-medium">لیست ویجت‌های موجود</h2>
			<ul className="space-y-2 list-disc list-inside">
				<li className="font-light">
					<strong>تقویم روزانه</strong>: مشاهده تاریخ و رویدادهای روز به‌سادگی
				</li>
				<li className="font-light">
					<strong>نرخ‌های لحظه‌ای ارز</strong>: مشاهده آخرین نرخ‌های ارز در لحظه
				</li>
				<li className="font-light">
					<strong>وضعیت آب و هوا</strong>: اطلاع از شرایط آب و هوایی با به‌روزترین داده‌ها
					(با استفاده از هوش مصنوعی)
				</li>
			</ul>
		</section>
	)
}
