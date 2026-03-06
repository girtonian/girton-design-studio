import { forwardRef } from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Next.js Image wrapper with aspect ratio control
 * Optimized for performance with lazy loading by default
 */

export type AspectRatio = '16/9' | '4/3' | '1/1' | '3/2' | 'auto'

export interface ImageProps extends Omit<NextImageProps, 'className'> {
  aspectRatio?: AspectRatio
  className?: string
  containerClassName?: string
}

const aspectRatioStyles: Record<AspectRatio, string> = {
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '3/2': 'aspect-[3/2]',
  auto: '',
}

export const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      aspectRatio = 'auto',
      className,
      containerClassName,
      alt,
      priority = false,
      quality = 90,
      width,
      height,
      ...props
    },
    ref
  ) => {
    // For auto aspect ratio, render image directly
    if (aspectRatio === 'auto') {
      return (
        <NextImage
          alt={alt}
          priority={priority}
          quality={quality}
          width={width}
          height={height}
          className={cn('w-full h-auto', className)}
          {...props}
        />
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden',
          aspectRatioStyles[aspectRatio],
          containerClassName
        )}
      >
        <NextImage
          alt={alt}
          priority={priority}
          quality={quality}
          fill
          className={cn('object-cover', className)}
          {...props}
        />
      </div>
    )
  }
)

Image.displayName = 'Image'
