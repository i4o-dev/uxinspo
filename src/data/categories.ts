import { UiCategories } from '@/utils/types'
import { z } from 'astro:content'

export const CategoryItem = z.object({
    image: z.string(),
    title: z.string(),
    type: z.enum(UiCategories),
})

export type CategoryItem = z.infer<typeof CategoryItem>

const categories: CategoryItem[] = [
    {
        image: '/thumbnails/activity-feeds.png',
        title: 'Activity Feeds',
        type: 'activity-feeds',
    },
    {
        image: '/thumbnails/boards.png',
        title: 'Boards',
        type: 'boards',
    },
    {
        image: '/thumbnails/dashboards.png',
        title: 'Dashboards',
        type: 'dashboards',
    },
    {
        image: '/thumbnails/editors.png',
        title: 'Editors/Builders',
        type: 'editors',
    },
    {
        image: '/thumbnails/empty-states.png',
        title: 'Empty States',
        type: 'empty-states',
    },
    {
        image: '/thumbnails/libraries.png',
        title: 'Libraries',
        type: 'libraries',
    },
    {
        image: '/thumbnails/lists-tables.png',
        title: 'Lists & Tables',
        type: 'lists-tables',
    },
    {
        image: '/thumbnails/nudges.png',
        title: 'Nudges',
        type: 'nudges',
    },
    {
        image: '/thumbnails/settings.png',
        title: 'Settings',
        type: 'settings',
    },
]

export default categories
