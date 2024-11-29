import type { Schema, Struct } from '@strapi/strapi';

export interface BlogPostsSelection extends Struct.ComponentSchema {
  collectionName: 'components_blog_posts_selections';
  info: {
    displayName: 'postsSelection';
    icon: 'bulletList';
  };
  attributes: {
    featuredPosts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    heading: Schema.Attribute.String;
  };
}

export interface ConfigSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_config_social_links';
  info: {
    displayName: 'socialLink';
    icon: 'earth';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    socialMedia: Schema.Attribute.Enumeration<
      ['github', 'youtube', 'twitter', 'facebook', 'whatsapp']
    > &
      Schema.Attribute.Required;
  };
}

export interface LayoutFeaturedCourse extends Struct.ComponentSchema {
  collectionName: 'components_layout_featured_courses';
  info: {
    description: '';
    displayName: 'featuredCourse';
    icon: 'server';
  };
  attributes: {
    announcement: Schema.Attribute.Text & Schema.Attribute.Required;
    course: Schema.Attribute.Relation<'oneToOne', 'api::course.course'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'layout';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'layout.link', true>;
    callToAction: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images' | 'files' | 'videos', true>;
  };
}

export interface LayoutLink extends Struct.ComponentSchema {
  collectionName: 'components_layout_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutMission extends Struct.ComponentSchema {
  collectionName: 'components_layout_missions';
  info: {
    displayName: 'mission';
    icon: 'briefcase';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Our Mission'>;
    showLogo: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface LayoutNewsletterForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_newsletter_forms';
  info: {
    displayName: 'newsletterForm';
    icon: 'envelop';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutPageInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_page_infos';
  info: {
    displayName: 'pageInfo';
    icon: 'book';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    cover: Schema.Attribute.Media<'images', true>;
    seo: Schema.Attribute.Component<'seo.seo-information', false>;
  };
}

export interface LayoutServicesPreview extends Struct.ComponentSchema {
  collectionName: 'components_layout_services_previews';
  info: {
    displayName: 'servicesPreview';
    icon: 'landscape';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface SeoSeoInformation extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'SeoInformation';
    icon: 'search';
  };
  attributes: {
    seoDescription: Schema.Attribute.Text;
    seoTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.posts-selection': BlogPostsSelection;
      'config.social-link': ConfigSocialLink;
      'layout.featured-course': LayoutFeaturedCourse;
      'layout.hero': LayoutHero;
      'layout.link': LayoutLink;
      'layout.mission': LayoutMission;
      'layout.newsletter-form': LayoutNewsletterForm;
      'layout.page-info': LayoutPageInfo;
      'layout.services-preview': LayoutServicesPreview;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
