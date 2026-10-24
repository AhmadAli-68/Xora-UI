import { Element } from 'react-scroll'
import { testimonials } from '../constants'
import TestimonialItem from '../components/TestimonialItem';

const Testimonials = () => {
  const halfTestimonialsLength = Math.floor(testimonials.length / 2);

  return (
    <section className='relative z-2 py-24 md:py-28 lg:py-40'>
      <Element name='testimonials'>
        <div className='container block lg:flex'>
          <div className='group testimonials_head-res relative z-2 mr-20 flex-300 select-none'>
            <p className='caption mb-5 max-md:mb-2.5'>
              Wall of Love
            </p>
            <h3 className='h3 max-md:h5 text-p4 mb-3 max-lg:mb-0'>
              Words from our fans
            </h3>

            <div className='opacity-0 group-hover:opacity-100 h-0.75 w-full bg-p1 transition-all duration-500 max-lg:hidden' />
          </div>

          <div className='testimonials_inner-before testimonials_inner-after relative -my-12 mr-3 flex items-start max-lg:static max-md:block'>
            <div className='testimonials_group-after flex-50'>
              {testimonials.slice(0, halfTestimonialsLength).map((testimonial) => (
                <TestimonialItem
                  key={testimonial.id}
                  item={testimonial}
                  containerClassName='last:after:hidden last:after:max-md:block'
                />
              ))}
            </div>

            <div className='flex-50'>
              {testimonials.slice(halfTestimonialsLength).map((testimonial) => (
                <TestimonialItem
                  key={testimonial.id}
                  item={testimonial}
                  containerClassName='last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12'
                />
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Testimonials