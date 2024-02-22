export default function Docs({params}: {
    params: {
        slug: string[]
    }
}){
    if (params.slug)
        return (
            <>
                <div className={'breadcrumb'}>
                    {params.slug.map(slug => {
                        return (
                            <span key={slug}>
                                {`${slug}/`}
                            </span>
                        )
                    })}
                </div>
            </>
        )
    else
        return (
            <h1>Title doc page</h1>
        )
}