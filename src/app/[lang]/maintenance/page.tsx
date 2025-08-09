'use client';

import {useTranslations} from 'next-intl';
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

function BulletList({items}: {items: string[]}) {
    return (
        <ul className="ml-5 list-disc space-y-2 text-sm md:text-base">
            {items.map((it, i) => (
                <li key={i}>{it}</li>
            ))}
        </ul>
    );
}

export default function MaintenancePage() {
    const t = useTranslations('maintenance');

    // Access arrays via t.raw
    const warranty = (t.raw('warranty.bullets') as string[]) || [];
    const scope = (t.raw('scope.bullets') as string[]) || [];
    const exclusions = (t.raw('exclusions.bullets') as string[]) || [];
    const support = (t.raw('support.bullets') as string[]) || [];
    const client = (t.raw('client.bullets') as string[]) || [];
    const thirdParty = (t.raw('thirdParty.bullets') as string[]) || [];
    const billing = (t.raw('billing.bullets') as string[]) || [];
    const handover = (t.raw('handover.bullets') as string[]) || [];

    return (
        <main className="container mx-auto max-w-4xl px-4 py-12">
            <header className="mb-8">
                <h1 className="text-3xl font-bold md:text-5xl">{t('title')}</h1>
                <p className="mt-3 text-muted-foreground">{t('summary')}</p>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('availability.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{t('availability.content')}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('warranty.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BulletList items={warranty} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('scope.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BulletList items={scope} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('exclusions.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BulletList items={exclusions} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('support.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BulletList items={support} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('targets.title')}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p>{t('targets.p1')}</p>
                        <p>{t('targets.p2')}</p>
                        <p>{t('targets.p3')}</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('client.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BulletList items={client} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('thirdParty.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BulletList items={thirdParty} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('billing.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BulletList items={billing} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('handover.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BulletList items={handover} />
                    </CardContent>
                </Card>
            </section>

            {/*<section className="mt-8">*/}
            {/*    <p className="text-sm text-muted-foreground">{t('note')}</p>*/}
            {/*    <div className="mt-6 flex flex-wrap items-center gap-3">*/}
            {/*        <span className="text-sm font-medium">{t('shortClause')}</span>*/}
            {/*        <Button className="h-9 px-4">{t('cta')}</Button>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </main>
    );
}