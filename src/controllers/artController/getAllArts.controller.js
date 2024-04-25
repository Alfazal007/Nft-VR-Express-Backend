import { asyncHandler } from "../../utils/asyncHandler.js";

const getAllArts = asyncHandler(async (req, res) => {
    const arts = [
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862486/hypxbfco3grirenloixf.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862487/wgk3r8hpt6ajohbheqbl.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862488/wm9ztiyijz9hvarsdxey.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862488/qfypaaqaa5dcrjqnksns.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862489/dpbyazvb1rzsdy8tek0z.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862490/ibmlfrprbj2szgyzcing.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862491/vxgwhwc3ssoqnt1xxxmn.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862492/ajxwxirmwx6yvsn6bruw.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862493/bkplqplybrgkw31sxywm.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862494/cctojzvfwk3kxrudxk6o.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862495/kf6itdky0lmbs3npdhtj.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862496/lkounagmqrrwc6r1qgy7.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862497/wazr7vu1bxuyawgqwvi3.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862498/tlj4wl5qdbodxxzhwnps.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862499/uxwe8esrwp4inwzqv3g9.jpg",
        "http://res.cloudinary.com/itachivrnft/image/upload/v1713862500/rlhcrliozbsknbthgykt.jpg",
    ];
    return res.status(200).json(arts);
});

export { getAllArts };
