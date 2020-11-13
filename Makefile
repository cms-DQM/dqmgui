CFLAGS:=--std=c++1z -O2 -fPIC -DGNU_GCC -D_GNU_SOURCE -D_GLIBCXX_USE_CXX11_ABI=0 -DBOOST_DISABLE_ASSERTS
LDFLAGS:=-Wl,-E -Wl,--hash-style=gnu
ROOTLIBS:=-lCore -lRIO -lNet -lHist -lMatrix -lThread -lTree -lMathCore -lGpad -lGraf3d -lGraf -lPhysics -lPostscript -lASImage
INCLUDE=-I. -I$(ROOT_ROOT)/include -I$(BOOST_ROOT)/include
LIBDIR=-L./build/lib -L$(shell echo $(LD_LIBRARY_PATH) | sed 's|:| -L|g')
OTHERLIBS:=-ldl -ljpeg -lpng

all: build/lib/librenderplugin.so build/bin/render
	@echo All build

build/objs/DQMRenderPlugin.o: src/DQMRenderPlugin.cc
	@mkdir -p $(@D)
	g++ -c $(CFLAGS) $(INCLUDE) -o $@ $<

build/objs/render.o: src/render.cc
	@mkdir -p $(@D)
	g++ -c $(CFLAGS) $(INCLUDE) -o $@ $<

build/lib/librenderplugin.so: build/objs/DQMRenderPlugin.o
	@mkdir -p $(@D)
	g++ --shared -Wl,-E -Wl,-z,defs $(LDFLAGS) $(LIBDIR) $(ROOTLIBS) $(OTHERLIBS) $< -o $@

build/bin/render: build/lib/librenderplugin.so build/objs/render.o
	@mkdir -p $(@D)
	g++ $(LDFLAGS) $(LIBDIR) $(ROOTLIBS) $(OTHERLIBS) build/objs/render.o -o $@  -lrenderplugin -lstdc++fs

clean:
	@rm -rf build
