type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 112" {...props}>

      <rect x="0" y="0" width="463" height="112" fill="#09090b"></rect><g transform="translate(10 10) rotate(0 221.5 46)"><image href="data:image/jpeg;base64,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" width="443" height="92"></image></g></svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
}