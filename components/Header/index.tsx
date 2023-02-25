import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    HomeIcon
} from '@heroicons/react/24/outline';

const navItems = [
    {
        title: "",
        href: "/",
        icon: HomeIcon
    }, {
        title: "Periodisering",
        href: "/periodization"
    }, {
        title: "Databank",
        href: "/databank"
    }, {
        title: "Over mij",
        href: "/aboutme"
    }
]

const Header = () => {
    return (
        <header>
            <Popover className="relative">
                <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:justify-start md:space-x-10 lg:px-8">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <span className="font-bold text-3xl text-gray-900">Plyometrie</span>
                        </Link>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                        {
                            navItems.map(({ title, href, icon: Icon }) => {
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="text-base font-medium text-gray-800 hover:text-gray-900 hover:underline"
                                    >
                                        {Icon ? <Icon className="h-6 w-6" /> : null}
                                        {title}
                                    </Link>
                                )
                            })
                        }

                    </Popover.Group>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex-grow">

                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-5">
                                <div className="grid grid-cols-2 gap-4">
                                    {
                                        navItems.filter(item => item.title).map(({ title, href }) => {
                                            return (
                                                <Link
                                                    key={href}
                                                    href={href}
                                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                                >
                                                    {title}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}

export default Header;