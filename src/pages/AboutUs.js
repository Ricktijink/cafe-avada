// React
import React from 'react'

// Components
import SmallHero from '../components/SmallHero'
import SmallItemsRow from '../components/SmallItemsRow';
import MediumItemsRow from '../components/MediumItemsRow';
import Footer from '../components/Footer';
import ArticleRow from '../components/ArticleRow';

import ArticleImg from '../components/ArticleImg'
import ArticleItem from '../components/ArticleItem'
import ScrollToTopOnMount from '../components/ScrollToTop'

export default function AboutUs() {
    return (
        <div className="page-wrapper">
            <ScrollToTopOnMount />
            <SmallHero className="small-hero" heroImg="aboutus-hero" title="About Us" headline="We don't preach about coffee we make coffee. We have eight venues across this celestial rock."/>
            <ArticleRow>
                <ArticleImg bg="article-1"/>
                <ArticleItem 
                    bg="dark-blue" 
                    title="Eat differently" 
                    subtitle="Avada food at unbeatable prices." 
                    article="Aged single origin dark coffee ristretto qui caffeine, body half and half kopi-luwak affogato cultivar. Wings ut single origin, medium decaffeinated, skinny arabica carajillo macchiato con panna caffeine arabica. Cinnamon, irish mazagran espresso beans caramelization americano. Foam sugar, cream cappuccino id macchiato whipped con panna. Id irish dark, sweet single shot, sweet, strong breve lungo half and half body.
                        Body ut white, breve organic to go a arabica. Plunger pot single shot caramelization pumpkin spice aftertaste cultivar redeye foam frappuccino white. Barista, mug doppio single shot black shop white. Roast, mocha sweet breve cream single origin aromatic espresso. Crema, milk whipped, caramelization galão brewed shop est cinnamon cup cortado plunger pot."
                />
            </ArticleRow>
            <ArticleRow>
                <ArticleItem
                    bg="light-blue" 
                    title="Finest ingredients" 
                    subtitle="Tenderest meat and freshest vegetables." 
                    article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum elementum consectetur. Nulla pharetra tristique urna ut suscipit. Curabitur sit amet dolor quis arcu scelerisque viverra eu ut lorem. Sed luctus, tellus volutpat tempor elementum, nisl elit sodales mi, et hendrerit dui diam eu est. Vestibulum ut efficitur nibh. Integer rhoncus nunc eu massa dignissim molestie."
                />
                <ArticleImg bg="article-2"/>
            </ArticleRow>
            <ArticleRow>
                <ArticleImg bg="article-3"/>
                <ArticleItem 
                    bg="dark-blue" 
                    title="Drink with friends" 
                    subtitle="Cool cocktails and exotic beers." 
                    article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum elementum consectetur. Nulla pharetra tristique urna ut suscipit. Curabitur sit amet dolor quis arcu scelerisque viverra eu ut lorem. Sed luctus, tellus volutpat tempor elementum, nisl elit sodales mi, et hendrerit dui diam eu est. Vestibulum ut efficitur nibh. Integer rhoncus nunc eu massa dignissim molestie.
                        Pellentesque blandit eros vel dolor finibus mattis. Nulla rhoncus hendrerit justo, a aliquam ex blandit quis. Nam odio nisl, scelerisque sed lobortis id, lobortis at ante. Aliquam varius et lacus vel varius. Vivamus efficitur nec massa a faucibus. Nam ut velit tortor. Suspendisse lacinia vehicula nisi, at gravida purus porta et. Cras tristique massa libero, nec mattis lacus. Cras tristique massa libero."
                />
            </ArticleRow>
            <MediumItemsRow />
            <SmallItemsRow />
            <Footer />
        </div>
    )
}